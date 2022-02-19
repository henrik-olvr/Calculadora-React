import React, { useState } from 'react';
import './App.css';

function App() {
    const [resultado, set_resultado] = useState('');

    const clicar = (e) => {
        set_resultado(resultado.concat(e.target.name));
    }

    const clear = () => {
        set_resultado('');
    }

    const calcular = () => {
        set_resultado(eval(resultado).toString());
    }

    const backspace = () => {
        set_resultado(resultado.slice(0, resultado.length - 1));
    }

  return (
    <div class="fundo">
        <h1>Calculadora React</h1>
        <div class="calculadora">

            <h1 id="titulo-calc">Calculadora</h1>
            <form>
                <input id="resultado" type="text" value={resultado}/>
            </form>

            <table>
                <tr>
                    <td><button class="botao backButtons" onClick={clear}>C</button></td>
                    <td><button class="botao backButtons" onClick={backspace}>←</button></td>
                    <td><button class="botao backButtons" onClick={clicar} name="/">/</button></td>
                    <td><button class="botao backButtons" onClick={clicar} name="*">X</button></td>
                </tr>
                <tr>
                    <td><button class="botao" onClick={clicar} name="7">7</button></td>
                    <td><button class="botao" onClick={clicar} name="8">8</button></td>
                    <td><button class="botao" onClick={clicar} name="9">9</button></td>
                    <td><button class="botao backButtons" onClick={clicar} name="-">-</button></td>
                </tr>
                <tr>
                    <td><button class="botao" onClick={clicar} name="4">4</button></td>
                    <td><button class="botao" onClick={clicar} name="5">5</button></td>
                    <td><button class="botao" onClick={clicar} name="6">6</button></td>
                    <td><button class="botao backButtons" onClick={clicar} name="+">+</button></td>
                </tr>
                <tr>
                    <td><button class="botao" onClick={clicar} name="1">1</button></td>
                    <td><button class="botao" onClick={clicar} name="2">2</button></td>
                    <td><button class="botao" onClick={clicar} name="3">3</button></td>
                    <td rowspan="2"><button class="botao backButtons" id="igual" onClick={calcular}>=</button></td>
                </tr>
                <tr>
                    <td colspan="2"><button class="botao" id="zero" onClick={clicar} name="0">0</button></td>
                    <td><button class="botao"  onClick={clicar} name=".">.</button></td>
                </tr>
            </table>
        </div>
    </div>
  );
}

export default App;