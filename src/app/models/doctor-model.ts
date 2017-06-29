/**
 * Created by crims on 2017/6/26.
 */
export class Doctor {
    private _doc_id: string;
    private _doc_name: string;
    private _doc_age: number;
    private _contact_number: string;
    private _speciality: string;
    private _password: string;
    private _weekday: Array<{weekday: string, start: string, end: string}>;

    get doc_id(): string {
        return this._doc_id;
    }

    set doc_id(value: string) {
        this._doc_id = value;
    }

    get doc_name(): string {
        return this._doc_name;
    }

    set doc_name(value: string) {
        this._doc_name = value;
    }

    get doc_age(): number {
        return this._doc_age;
    }

    set doc_age(value: number) {
        this._doc_age = value;
    }

    get contact_number(): string {
        return this._contact_number;
    }

    set contact_number(value: string) {
        this._contact_number = value;
    }

    get speciality(): string {
        return this._speciality;
    }

    set speciality(value: string) {
        this._speciality = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get weekday(): Array<{ weekday: string; start: string; end: string }> {
        return this._weekday;
    }

    set weekday(value: Array<{ weekday: string; start: string; end: string }>) {
        this._weekday = value;
    }

    constructor() {}

    /*    constructor(doc_id: string, doc_name: string, doc_age: number, contact_number: string, speciality: string,
                password: string, weekday: Array<{ weekday: string; start: string; end: string }>) {
        this._doc_id = doc_id;
        this._doc_name = doc_name;
        this._doc_age = doc_age;
        this._contact_number = contact_number;
        this._speciality = speciality;
        this._password = password;
        this._weekday = weekday;
    }*/

}
