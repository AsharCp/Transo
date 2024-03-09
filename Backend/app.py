# Install sependencies
# !pip install langdetect
# !pip install --upgrade googletrans==4.0.0-rc1
# pip install flask

from flask import Flask,request,jsonify
from langdetect import detect_langs
import googletrans
from googletrans import Translator
# sentance = "Cómo estás"

app = Flask(__name__)
@app.route('/convert', methods=['POST'])
def translate_text():
    data = request.json
    text = data['input_text']
    to_language = data['to_lang']  
    translator = Translator()
    translatedText = translator.translate(text,dest=to_language)
    return jsonify({'translated_text': translatedText.text})



if __name__ == '__main__':
    app.run(debug=True)