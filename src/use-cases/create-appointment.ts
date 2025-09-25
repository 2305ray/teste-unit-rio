//todo caso de uso tem uma entrada e uma saída

import { Appointment } from "../entities/apointments";
import { AppointmentsRepository } from "../repositories/appointments-repositories";

interface CreateAppointmentRequest {
    customer: string;
    startsAt: Date;
    endsAt: Date;
}

type CreateAppointmentResponse = Appointment

export class CreateAppointment {
    constructor(
        private appointmentsRepository: AppointmentsRepository
    ) {

    }
    async execute({
        customer,
        startsAt,
        endsAt
    }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
        const overlappingAppointment = await this.appointmentsRepository.findOverlappingAppointment(
            startsAt,
            endsAt,
        )

        if (overlappingAppointment) {
            throw new Error('Another appointment overlaps this date')
        }
        
        const appointment = new Appointment({
            customer,
            startsAt,
            endsAt
        })
        await this.appointmentsRepository.create(appointment)
        return appointment
    }
}