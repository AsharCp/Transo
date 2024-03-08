# Install sependencies
# !pip install langdetect
# !pip install --upgrade googletrans==4.0.0-rc1

from langdetect import detect_langs
import googletrans
from googletrans import Translator
sentance = "Cómo estás"

# from googletrans import Translator
translator = Translator()
translated_language = translator.translate(sentance,dest='en')
print(translated_language.text)