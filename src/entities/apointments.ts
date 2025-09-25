export interface AppointementProps {
    customer: string;
    startsAt: Date;
    endsAt: Date;
}

export class Appointment {
    private props: AppointementProps;

    get customer() {
        return this.props.customer;
    }

    get startsAt() {
        return this.props.startsAt;
    }

    get endsAt() {
        return this.props.endsAt;
    }

    constructor(props: AppointementProps) {
        const {startsAt, endsAt} = props;

        if (endsAt <= startsAt) {
            throw new Error('invalid end Date')
        }
        this.props = props;
    }
}
