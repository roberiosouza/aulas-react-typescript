import { useNavigate } from "react-router-dom";

export const Login = () => {
    const history = useNavigate();

    const handleButton = () => {
        history("/pagina-inicial");
    }

    return(
        <div>
            <div>Login</div>
            <button onClick={handleButton}>Entrar</button>
        </div>
    );
}