import { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleEntrar = () => {
        
    }

    return(
        <div>
            <form>
                <label>
                    <span>E-mail</span>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)} />
                </label>
                <button type="button" onClick={handleEntrar}>Entrar</button>
            </form>
        </div>
    );
}