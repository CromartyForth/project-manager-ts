import { Log } from "./log";

export class Entity {

    private _id: number;
    private _title: string;
    private _creationDate: Date;

    constructor(id: number, title: string) {

        this._id = id;
        this._title = title;
        this._creationDate = new Date();


    }

    get id(): number {

        return this._id;

    }

    @Log()

    get title(): string {

        Entity.wait(512);

        return this._title;

    }

    set title(title: string) {

        this._title = title;

    }

    get creationDate(): Date {

        return this._creationDate;

    }

    private static wait(ms) {
        
        let start = Date.now();

        let now = start;

        while (now < start + ms) {

            now = Date.now();

        }

    }


}