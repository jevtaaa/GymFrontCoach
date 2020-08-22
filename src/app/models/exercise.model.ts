export class Exercise {
    constructor(private exercise_id: number, private name: string, private description: string, private reps?: number, private effort?: string) {}

    getId() {
        return this.exercise_id;
    }        
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getReps() {
        return this.reps;
    }
    getEffort() {
        return this.effort;
    }
    

    setId(id: number) {
        this.exercise_id = id;
    }        
    setName(name: string) {
        this.name = name;
    }
    setDescription(description: string) {
        this.description = description;
    }
    setReps(reps: number) {
        this.reps = reps;
    }
    setEffort(effort: string) {
        this.effort = effort;
    }

}