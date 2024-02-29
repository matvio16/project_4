# Heart Attack Risk Estimator Prediction Model

This Jupyter Notebook presents the evaluation of a logistic regression model trained on a dataset presumably related to predicting the risk of heart attack. The process involves data loading, preprocessing, model training, and evaluation, utilizing the `scikit-learn` package and `pandas` for data manipulation.

## Process Overview

1. **Import Libraries**: Essential libraries are imported, including various `scikit-learn` modules for model training and evaluation, and `pandas` for data handling.

2. **Load Dataset**: The dataset is loaded into a Pandas DataFrame from a CSV file, containing features related to heart attack risk.

3. **Data Preprocessing**:
   - **Feature Selection**: Drops 'Patient ID', 'Heart Attack Risk', and 'Blood Pressure' from the dataset. Uses 'Heart Attack Risk' as the target variable (`y`) and the rest as features (`X`).
   - **Handling Categorical and Numerical Features**: Identifies categorical features for one-hot encoding and numerical features for standard scaling.

4. **Preprocessing Pipeline**: Constructs a `ColumnTransformer` to apply standard scaling to numerical features and one-hot encoding to categorical features.

5. **Model Pipeline**: Defines a pipeline combining the preprocessing steps with a logistic regression model.

6. **Splitting Dataset**: Splits the dataset into training and testing sets in an 80-20 ratio.

7. **Model Training**: Trains the logistic regression model on the preprocessed training data.

8. **Making Predictions and Evaluation**:
   - Uses the trained model to make predictions on the test set.
   - Prints the model's accuracy and a classification report, including precision, recall, and F1-score for each class.

## Results 

The logistic regression model achieved an accuracy of 64.18%. However, the classification report reveals significant performance issues, particularly with class `1` (indicating a heart attack risk), where both precision and recall are 0.00. This suggests the model is heavily biased towards predicting class `0` (no heart attack risk), likely due to class imbalance.


## Process Overview

1. **Random Forest Pipeline Creation**: A pipeline named `rf_pipeline` is defined, which includes a preprocessing step (`preprocessor`) and a classification step using `RandomForestClassifier` with a fixed random state for reproducibility.

2. **Model Training**: The model is trained on a training dataset (`X_train`, `y_train`).

3. **Making Predictions**: Predictions are made on a separate testing dataset (`X_test`).

4. **Model Evaluation**: The model's accuracy and a detailed classification report (including precision, recall, and F1-score) are computed using the true labels (`y_test`) and predicted labels (`y_pred_rf`).

## Results

- The Random Forest model achieved an accuracy of 64.00%, which might seem moderate but requires context (e.g., baseline accuracy, class distribution) to fully evaluate.
- The classification report indicates a substantial imbalance in model performance across classes:
    - High precision (0.64) and recall (0.98) for class `0`, suggesting the model is effective at identifying the negative class.
    - Low precision (0.45) and especially low recall (0.02) for class `1`, indicating the model struggles significantly to correctly identify positive cases.

# Gradient Boosting Model Evaluation

The provided code demonstrates the training and evaluation of a Gradient Boosting classifier on a dataset, leveraging the `GradientBoostingClassifier` from `scikit-learn`. The model is encapsulated within a pipeline that includes preprocessing steps followed by the classifier itself.

## Process Overview

1. **Gradient Boosting Pipeline**: A pipeline named `gb_pipeline` is established, incorporating a `preprocessor` for data preprocessing and `GradientBoostingClassifier` as the classifier. The model is set with a deterministic `random_state` for reproducibility.

2. **Model Training**: The pipeline is trained using the `fit` method on the training data (`X_train`, `y_train`).

3. **Prediction**: The trained model is then used to make predictions on the test dataset (`X_test`).

4. **Evaluation**: Model performance is assessed through accuracy and a detailed classification report, providing metrics such as precision, recall, and F1-score for each class.

## Results 

- The Gradient Boosting model achieved an accuracy of 63.89%, which might initially seem reasonable but warrants deeper analysis given the context of the task.

- The classification report reveals significant disparities in model performance across different classes:
    - High precision (0.64) and recall (0.98) for class `0`, indicating effective identification of this class.
    - Conversely, both precision (0.42) and recall (0.02) for class `1` are notably low, particularly the recall, suggesting the model is largely ineffectual at identifying positive instances of this class.

- These results imply a model heavily biased toward the majority class, likely leading to a high number of false negatives for class `1`.


# Rafael's Model Evaluation and Improvement Strategy

The code provided demonstrates a process to address class imbalance in a dataset using the RandomOverSampler method from the imblearn library, followed by training and evaluating a Random Forest Classifier from scikit-learn.

## Process Overview

1. **Class Imbalance Handling**:
    - Initially, the class distribution in the dataset (`y`) is imbalanced, favoring class `0`.
    - The `RandomOverSampler` is utilized to equalize the number of instances between classes by oversampling the minority class (`1`).

2. **Model Training and Evaluation**:
    - After oversampling, the dataset is split into training and testing sets.
    - A Random Forest model is trained on the resampled data.
    - The model's performance is evaluated using accuracy and a detailed classification report.

## Initial Results

- **Before Oversampling**: The minority class (`1`) is significantly underrepresented compared to the majority class (`0`).
- **After Oversampling**: Both classes are equally represented, eliminating the class imbalance.
- **Model Performance**: The initial model (not explicitly shown before Random Forest training) yields an accuracy of approximately 50%, with balanced precision and recall across both classes.

## Random Forest Results

- **Improved Accuracy**: The Random Forest model significantly improves accuracy to 79.16%.
- **Precision and Recall**: There is a notable improvement in precision and recall for both classes, indicating effective handling of the previously imbalanced data.

# Heart Attack Risk Assessment App
After feeling comfortable with our model, we shifted our focus to creating a tool aimed at capturing additional data to further enhance our ability to predict the risk of heart attack. Our aim was to provide a platform for users to assess their potential risk of heart attack.

Here's a brief overview:

## Features:
* **Customizable Risk Form:** Our app includes a comprehensive form covering various factors such as gender, age, cholesterol levels, diabetes history, smoking habits, stress levels, alcohol consumption, exercise, and sleep patterns.

* **Transparency and Accountability:** We value transparency and have included a disclaimer emphasizing that our tool serves as an informative guide and should not replace professional medical advice.

* **Data Processing:** Upon form submission, JavaScript functions handle data processing. Information is securely captured and stored in an array for diagnostic purposes.

* **Machine Learning Prediction:** Data undergoes analysis through our machine learning model, enabling us to predict potential heart attack risks with enhanced precision.

## Disclaimer:
Please note that while our app provides valuable insights, it is not a substitute for professional medical advice. We strongly encourage users to consult healthcare professionals for personalized guidance and to prioritize proactive measures for cardiovascular health.

## Next Steps:
Now, let's delve into how our model makes these predictions.
