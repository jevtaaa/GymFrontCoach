export class Coach {
    constructor(private coach_id: number, private username: string, private password: string,
        private name: string, private surname: string, private email: string, private bio: string, private token: string) {}

    getId() {
        return this.coach_id;
    }        
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
    getEmail() {
        return this.email;
    }
    getBio() {
        return this.bio;
    }
    getToken() {
        return this.token;
    }

    setId(id: number) {
        this.coach_id = id;
    }        
    setUsername(username: string) {
        this.username = username;
    }
    setPassword(password: string) {
        this.password = password;
    }
    setName(name: string) {
        this.name = name;
    }
    setSurname(surname: string) {
        this.surname = surname;
    }
    setEmail(email: string) {
        this.email = email;
    }
    setBio(bio: string) {
        this.bio = bio;
    }
    setToken(token: string) {
        this.token = token;
    }
}