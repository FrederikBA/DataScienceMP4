import pandas as pd
import requests
from bs4 import BeautifulSoup
import spacy
import csv
# Load danish tokenizer
nlp = spacy.load("da_core_news_sm")

def webscraping():
    url = "https://dk.trustpilot.com/review/www.kmd.dk"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")

    review_divs = soup.find_all("div", {"class": "styles_cardWrapper__LcCPA styles_show__HUXRb styles_reviewCard__9HxJJ"})

    reviews = []

    for div in review_divs:
        review_title = div.find("h2", {"class": "review-title"})
        
        # Find the first p tag within the div
        review_paragraph = div.find("p")
        reviews.append(review_paragraph.text)
        
    return reviews

def preprocess_text(text):
    
    # Tokenize the text and remove stop words and punctuation
    doc = nlp(text)
    tokens = [token.lemma_.lower() for token in doc if not token.is_stop and not token.is_punct]

    return tokens 

def load_polarity_csv():
    # Load the DSL lexicon
    dsl_lexicon = {}
    with open('../data/2_headword_headword_polarity.csv', encoding='utf-8') as f:
        reader = csv.reader(f)
        for row in reader:
            lemma, polarity = row[0], float(row[4])
            dsl_lexicon[lemma] = polarity
    return dsl_lexicon

# Define a function to classify a review as positive, negative or neutral
def classify_review(review):
    tokens = preprocess_text(review)
        
    # Calculate the sentiment score of the review
    sentiment_score = sum([float(load_polarity_csv().get(token, 0)) for token in tokens])
    
    # Classify the review based on the sentiment score
    if sentiment_score > 0:
        return "positive"
    elif sentiment_score < 0:
        return "negative"
    else:
        return "neutral"


def reviews_classification():
    reviews = webscraping()
    classification = []
    # Test the function with a list of sample reviews
    for review in reviews:
        classification.append(classify_review(review))
    
    return classification