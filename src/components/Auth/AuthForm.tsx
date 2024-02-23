import { useState, ChangeEvent } from "react";
import { Button } from "../../ui/Button";
import Card, { CardContent, CardTitle } from "../../ui/Card";
import Input from "../../ui/Input";
import useAuthStore from "../../store/authStore";

const AuthForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { onLogin } = useAuthStore((state) => ({
    onLogin: state.onLogin,
  }));

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    onLogin(email, password);
  };

  return (
    <Card width="320px">
      <CardContent>
        <CardTitle>Авторизация</CardTitle>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button onClick={handleLogin}>Войти</Button>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
