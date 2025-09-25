//todo caso de uso tem uma entrada e uma saída

import { Appointment } from "../entities/apointments";

interface CreateAppointmentRequest {
    customer: string;
    startsAt: Date;
    endsAt: Date;
}

type CreateAppointmentResponse = Appointment

export class CreateAppointment {
    async execute({ customer, startsAt, endsAt }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
        const appointment = new Appointment({ customer, startsAt, endsAt })
        return appointment
    }
}