import CategoryModel from "../models/category.model";

export const AddCategoryController = async (req, res, next) => {
  try {
    const { name, image } = req.body;
    if (!name || !image) {
      return res.status(400).json({
          message: "Enter required fields",
          error: true,
          success: false,
        });
    }

    const addCategory = new CategoryModel({
        name,
        image,
    })

    const saveCategory = await addCategory.save();

    if(!saveCategory) {
        return res.status(500).json({
            message: "Not created",
            error : true,
            success : false
        })
    }

    return res.status(200).json({
        message: "Category added successfully",
        data : saveCategory,
        success: true,
        error: false
    })

  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
