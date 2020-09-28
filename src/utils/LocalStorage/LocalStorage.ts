export default {
  signup: (name: string, email: string, password: string): string | undefined => {
    if (name.length <= 0 || email.length <= 0 || password.length <= 0) return;
    const data = localStorage.getItem('users');
    if (data) {
      const users = JSON.parse(data) as User[];
      const exist = users.filter(user => user.email.includes(email) && user.password.includes(password));

      if (exist.length > 0) return 'Usuário já existe!';

      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      return 'Usuário cadastrado com sucesso!';
    } else {
      const users = [];
      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      return 'Usuário cadastrado com sucesso!';
    }
  },

  signin: (email: string, password: string): SigninResponse | undefined => {
    if (email.length <= 0 || password.length <= 0) return;
    const data = localStorage.getItem('users');
    if (data !== null) {
      const users = JSON.parse(data) as User[];
      const exist = users.filter(user => user.email.includes(email) && user.password.includes(password));
      if (exist.length === 0) return { check: false, message: 'Usuário não encontrado! Email ou senha inválidos!' };
      const logged = {
        name: exist[0].name,
        email: exist[0].email
      }
      localStorage.setItem('logged', JSON.stringify(logged));
      return { check: true, message: 'Usuário logado com sucesso!' };
    }
    return { check: false, message: 'Não há usuário cadastrado!' };
  },

  logged: (): LoggedResponse => {
    const data = localStorage.getItem('logged');
    if (data !== null) {
      const user = JSON.parse(data) as User;
      return {
        logged: true,
        name: user.name
      }
    }
    return { logged: false };
  },

  logout: () => {
    const data = localStorage.getItem('logged');
    if (data !== null) localStorage.removeItem('logged');
  },
}