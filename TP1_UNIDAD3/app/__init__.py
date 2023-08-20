from flask import Flask, request
from config import Config
from datetime import datetime
from .utils import funciones 
def init_app(): 
    """Crea y configura la aplicación Flask""" 
    app = Flask(__name__, static_folder = Config.STATIC_FOLDER, template_folder = Config.TEMPLATE_FOLDER) 
    app.config.from_object(Config)
    
    #Ejercicio 1
    @app.route('/') 
    def bienvenida(): 
        return 'Bienvenidx'
    
    #Ejercicio 2
    @app.route('/info')
    def mostrar_name(): 
        return f'Bienvenidx a {Config.APP_NAME}'
    
    #Ejercicio 3
    @app.route('/about')
    def info_app():
        info ={
            'app_name':Config.APP_NAME,
            'description': Config.DESCRIPTION,
            'developers': Config.DEVELOPERS,
            'version': Config.version
        }   
        return info,200
    
    #Ejercicio 4
    @app.route('/sum/<int:num1>/<int:num2>')
    def sumar(num1,num2):
        return f'{num1+num2}'
    
    #Ejercicio 5
    @app.route('/age/<string:dob>')
    def edad(dob):
        return {"age":funciones.calcular_edad(dob)}
    
    #Ejercicio 6
    @app.route('/operate/<string:operation>/<int:num1>/<int:num2>')
    def operaciones(operation,num1,num2):
        return funciones.operacion_aritmetica(operation,num1,num2)
    
    #Ejercicio 7
    @app.route('/operate')
    def operaciones2():
        date = request.args
        operation = date.get('operation',default='',type=str)
        num1 = date.get('num1',default=0,type=int)
        num2 = date.get('num2',default=0,type=int)
        return funciones.operacion_aritmetica(operation,num1,num2)

    #Ejercicio 8
    @app.route('/title/<string:word>')
    def format_string(word):
        return {"formatted_word" : word.capitalize()}
    
    #Ejercicio 9
    @app.route('/formatted/<string:dni>')
    def format_dni(dni):
        formatted_dni = funciones.validar_dni(dni)
        if formatted_dni != -1:
            return { "formatted_dni": formatted_dni },200
        
        return {'error': 'Ha ocurrido un error operacion no válida'}, 400
        
    #Ejercicio 10
    @app.route('/format')
    def format_datos():
        datos = request.args
        firstname = datos.get('firstname',default="",type=str).capitalize()
        lastname = datos.get('lastname',default="",type=str).capitalize()
        age = funciones.calcular_edad(datos.get('dob',default="",type=str))
        dni = funciones.validar_dni(datos.get('dni',default="",type=str))
        datos_json = {
            'firstname': firstname,
            'lastname':lastname,
            'age':age,
            'dni':dni
        }
        """ (datos_json,200,{'Content-Type':'text/html;charset=utf-8'}) """
        return datos_json,200
    
    #Ejercicio 11
    @app.route('/encode/<string:keyword>')
    def encriptar(keyword):
        return funciones.encriptarMorse(keyword)

    #Ejercicio 12
    @app.route('/decode/<string:morse_code>')
    def desencriptar(morse_code):
        return funciones.desencriptarMorse(morse_code)
    
    #Ejercicio 13
    @app.route('/convert/binary/<string:num>')
    def conversionBinario(num):
        binario = int(num)
        return str(funciones.convertirBinario(binario))

    #Ejercicio 14
    @app.route('/balance/<string:input>')
    def balanceado(input):
        if funciones.simbolos_balanceados(input):
            return { "balanced": True }
        else:
            return { "balanced": False }

    return app