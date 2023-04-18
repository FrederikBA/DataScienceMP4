import pandas as pd

def get_company_locations():
    df = pd.read_csv('../data/companies.csv')

    df = df.rename(columns={'latitude': 'lat', 'longitude': 'lng'})

    geodata = []
    dict_list = df[['lat', 'lng']].to_dict(orient='records')

    for index, row in df.iterrows():
        company = {'name': row['company'], 'position': dict_list[index]}
        geodata.append(company)

    return geodata