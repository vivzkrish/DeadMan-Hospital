/**
 * Created by crims on 2017/6/26.
 */
export class Patient {
    private _patient_id: string;
    private _patient_name: string;
    private _password: string;
    private _patient_age: number;
   private _patient_email: string;

    get patient_id(): string {
        return this._patient_id;
    }

    set patient_id(value: string) {
        this._patient_id = value;
    }

    get patient_name(): string {
        return this._patient_name;
    }

    set patient_name(value: string) {
        this._patient_name = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get patient_age(): number {
        return this._patient_age;
    }

    set patient_age(value: number) {
        this._patient_age = value;
    }

    get patient_email(): string {
        return this._patient_email;
    }

    set patient_email(value: string) {
        this._patient_email = value;
    }

    constructor() {
    }

    /*    constructor(patient_id: string, patient_name: string, password: string, patient_age: number, patient_email: string) {
        this._patient_id = patient_id;
        this._patient_name = patient_name;
        this._password = password;
        this._patient_age = patient_age;
        this._patient_email = patient_email;
    }*/
}
