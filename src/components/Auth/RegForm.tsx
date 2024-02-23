import { useState, ChangeEvent } from "react";
import { Button } from "../../ui/Button";
import Card, { CardContent, CardTitle } from "../../ui/Card";
import Input from "../../ui/Input";
import useAuthStore from "../../store/authStore";
import Select from "../../ui/Select";

const RegForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [roleId, setRoleId] = useState<number>(0);

  const { onRegister } = useAuthStore((state) => ({
    onRegister: state.onRegister,
  }));

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRoleIdChange = (value: string | number) => {
    setRoleId(Number(value));
  };

  const handleRegister = () => {
    onRegister(email, password, password, roleId);
  };

  return (
    <Card width="320px">
      <CardContent>
        <CardTitle>Регистрация</CardTitle>
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
        {/* <Input
          placeholder="Повторите пароль"
          type="password"
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
        /> */}
        <Select
          placeholder="Кто вы?"
          options={[
            { label: "Пациент", value: 2 },
            { label: "Психолог", value: 3 },
          ]}
          value={roleId}
          onChange={handleRoleIdChange}
        />
        <Button onClick={handleRegister}>Зарегистрироваться</Button>
      </CardContent>
    </Card>
  );
};

export default RegForm;
