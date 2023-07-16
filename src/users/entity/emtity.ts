

export class Users {
    private paramsName: string;
    private paramsEmail: string;
    private paramsPassword: string;
    private paramsAvatar: string;
    createdAt: Date;

    constructor(name: string, email: string, password: string, avatar: string) {
        this.paramsName = name
        this.paramsEmail = email;
        this.paramsPassword = password;
        this.paramsAvatar = avatar
        this.createdAt = new Date()
      }

        set name(name: string) {
        this.name = name
        };

        get name() {
            return this.paramsName
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


