import { Training } from '../models/training.model';
import { History } from './history.model';

export class Client {
    constructor(private client_id: number, private username: string,private name: string, private surname: string, 
        private email: string, private bio: string, private height: number, private weight: number, private training?: Training, public history: History[] = null) {}

    getId() {
        return this.client_id;
    }        
    getUsername() {
        return this.username;
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
    getHeight() {
        return this.height;
    }
    getWeight() {
        return this.weight;
    }
    getTraining() {
        return this.training;
    }

    setId(id: number) {
        this.client_id = id;
    }        
    setUsername(username: string) {
        this.username = username;
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
    setWeight(weight: number) {
        this.weight = weight;
    }
    setHeight(height: number) {
        this.height = height;
    }
    setTraining(tr: Training) {
        this.training = tr;
    }
}