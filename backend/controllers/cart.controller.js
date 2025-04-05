import CartProductModel from "../models/cartProduct.model.js";
import UserModel from "../models/user.model.js";

export const addToCartItemController = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.body;

    if (!productId) {
      return res.status(402).json({
        message: "Provide productId",
        error: true,
        success: false,
      });
    }

    const checkItemCart = await CartProductModel.findOne({
      userId: userId,
      productId: productId,
    });

    if (checkItemCart) {
      return res.status(400).json({
        message: "Item already in cart",
      });
    }

    const cartItem = new CartProductModel({
      quantity: 1,
      userId: userId,
      productId: productId,
    });
    const save = await cartItem.save();

    const updateCartUser = await UserModel.updateOne(
      { _id: userId },
      {
        $push: {
          shopping_cart: productId,
        },
      }
    );

    return res.status(200).json({
      data: save,
      message: "Item add successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};


export const getCartItemController = async(req,res)=>{
    try {
        const userId = req.userId

        const cartItem =  await CartProductModel.find({
            userId : userId
        }).populate('productId')

        return res.status(200).json({
            data : cartItem,
            error : false,
            success : true
        })

    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}



export const updateCartItemQtyController = async(req,res)=>{
  try {
      const userId = req.userId 
      const { _id,qty } = req.body

      if(!_id ||  !qty){
          return res.status(400).json({
              message : "provide _id, qty"
          })
      }

      const updateCartitem = await CartProductModel.updateOne({
          _id : _id,
          userId : userId
      },{
          quantity : qty
      })

      return res.status(200).json({
          message : "Update cart",
          success : true,
          error : false, 
          data : updateCartitem
      })

  } catch (error) {
      return res.status(500).json({
          message : error.message || error,
          error : true,
          success : false
      })
  }
}