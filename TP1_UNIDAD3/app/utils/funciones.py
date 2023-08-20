from datetime import datetime
import json
def operacion_aritmetica(operation,num1,num2):
    if operation == 'sum':
        return {'resultado':f'{num1+num2}'}
    elif operation == 'sub':
        return {'resultado':f'{num1-num2}'}
    elif operation == 'mult':
        return {'resultado':f'{num1*num2}'}
    elif operation == 'div':
        return {'resultado':f'{num1/num2}'}
    else:
        return {'error': 'Ha ocurrido un error operacion no válida'}, 400

def validar_dni(str_dni):
    '''Retorna el dni si cumple con las condiciones o en caso contrario -1'''
    dni_format = str_dni.replace("-","")
    dni_format = dni_format.replace(".","")
    if len(dni_format) == 8 and dni_format.isdigit():
        dni_format = int(dni_format)
        if dni_format > 9999999:
            return dni_format
        else:
            return -1
    else:
        return -1

def calcular_edad(dob):
    fecha_str = dob.replace("-","/")
    fecha_nto = datetime.strptime(fecha_str, '%Y/%m/%d')
    fecha_actual = datetime.now()
    years = fecha_actual.year - fecha_nto.year
    if fecha_nto.month<fecha_actual.month:
        return years
    elif fecha_nto.month == fecha_actual.month:
        if fecha_actual.day > fecha_nto.day:
            return years
        else:
            return years - 1
    else:
        return years - 1
    
def encriptarMorse(keywords):
    with open("morse_code.json") as archivo:
        morse = json.load(archivo)
    letras = morse['letters']
    keywords_morse = ""
    for letra in keywords:
        if letra != "+":
            letra = letra.upper()
            keywords_morse+=letras[letra]+"+"
        else:
            keywords_morse+="^+"
    return keywords_morse[:-1]
    
def desencriptarMorse(keyword):
    with open("morse_code.json") as archivo:
        morse = json.load(archivo)
    letras_json = morse['letters']
    letras_keyword = keyword.split('+')
    keyword_decodifcada = ""
    for cod in letras_keyword:
        if cod!="^":
            for clave,valor in letras_json.items():
                if cod == valor:
                    keyword_decodifcada+=clave
                    break
        else:
            keyword_decodifcada+=" "
    return keyword_decodifcada.capitalize()

def convertirBinario(binario):
    num = 0
    exponente = 0
    while binario > 0:
      dig = binario % 10
      num += dig * (2**exponente)
      binario = binario // 10
      exponente+=1
    return num

def simbolos_balanceados(caracteres):
  stack = []
  caracteres_apertura = "([{"
  caracteres_cierre = ")]}"
  caracteres_balanceados = ["[]","()","{}"]
  for caracter in caracteres:
    if caracter in caracteres_apertura:
      stack.append(caracter)
    elif caracter in caracteres_cierre:
      if len(stack)>=1:
        caracter_apertura = stack[-1]
        par_caracter = caracter_apertura + caracter
        if par_caracter in caracteres_balanceados:
            stack.pop()  
        else:
          return False
      else:
        return False
  return True


if __name__ =="__main__":
    """ print(operacion_aritmetica('sum',2,3))
    print(validar_dni('00-456.789'))
    print(calcular_edad("1988-10-20")) """
    print(encriptarMorse("Buenas+tardes"))
    print(desencriptarMorse("-...+..-+.+-.+.-+...+^+-+.-+.-.+-..+.+..."))