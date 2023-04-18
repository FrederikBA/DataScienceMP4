import pandas as pd

def get_company_locations():
    df = pd.read_csv('../data/companies.csv')

    geodata = []
    for index, row in df.iterrows():
        company = {'name': row['company'], 'latitude': row['latitude'], 'longitude': row['longitude']}
        geodata.append(company)

    return geodata