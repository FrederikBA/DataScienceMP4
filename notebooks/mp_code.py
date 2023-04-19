import pandas as pd
import requests
from bs4 import BeautifulSoup
import spacy

def get_reviews(url):
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
    # Load danish tokenizer
    nlp = spacy.load("da_core_news_sm")
    
    # Tokenize the text and remove stop words and punctuation
    doc = nlp(text)
    tokens = [token.lemma_.lower() for token in doc if not token.is_stop and not token.is_punct and not token.is_digit]

    return tokens 

