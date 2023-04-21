import pandas as pd
import numpy as np

# sklearn for machine learning methods
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
from sklearn import tree
from sklearn import model_selection
from sklearn.metrics import classification_report
from sklearn.metrics import accuracy_score
from sklearn.tree import DecisionTreeClassifier

def get_company_locations():
    df = pd.read_csv('../data/companies.csv')

    df = df.rename(columns={'latitude': 'lat', 'longitude': 'lng'})

    geodata = []
    dict_list = df[['lat', 'lng']].to_dict(orient='records')

    for index, row in df.iterrows():
        company = {'name': row['company'], 'position': dict_list[index]}
        geodata.append(company)

    return geodata


def predict_company_location(income, employees):
    df = pd.read_csv('../data/companies_municipalitiesç.csv')

    unique_municipalities = df['municipality'].unique()

    mapping = {}

    for i in range(len(unique_municipalities)):
        mapping[unique_municipalities[i]] = i + 1

    numeric_cols = df.select_dtypes(include=['number']).columns

    df_numeric = df[numeric_cols]

    array = df_numeric.values

    X, y = array[:, :-1], array[:, -1]
    set_prop = 0.2

    seed = 5

    X_train, X_test, y_train, y_test = model_selection.train_test_split(X, y, test_size=set_prop, random_state=seed)

    params = {'max_depth': 2}
    classifier = DecisionTreeClassifier(**params)
 
    classifier.fit(X_train, y_train)

    y_testp = classifier.predict(X_test)

    new_company_X = np.array([[income, employees]])


    y_testp = classifier.predict(new_company_X)

    key = [k for k, v in mapping.items() if v == int(y_testp)][0]


    return key

def get_company_graph():
    df = pd.read_csv('../data/companies_municipalities.csv')
    nodes = []
    
    return ""
