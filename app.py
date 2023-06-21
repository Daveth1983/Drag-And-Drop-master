from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')


@app.route('/nowy/<zmienna>')
def nowy(zmienna):
   return f'<h1> to jest {zmienna} nowa strona </h1>'

@app.route('/capricorn')
def capricorn():
   return 'Capricorn '

if __name__ == '__main__':
   app.run(
  
   
   )   
