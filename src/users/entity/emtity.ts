

export class Users {
    private paramsNome: string;
    private paramsEmail: string;
    private paramsPassword: string;
    private paramsAvatar: string;
    createdAt: Date;

    constructor(nome: string, email: string, password: string, avatar: string) {
        this.paramsNome = nome
        this.paramsEmail = email;
        this.paramsPassword = password;
        this.paramsAvatar = avatar
        this.createdAt = new Date()
      }

        set nome(nome: string) {
        this.nome = nome
        };

        get nome() {
            return this.paramsNome
        }

        set email(email: string) {
            this.email = email
        };

        get email() {
            return this.paramsEmail
        }

        get password() {
            return this.paramsPassword
        }

        get avatar() {
            return this.paramsAvatar
        }

    }


