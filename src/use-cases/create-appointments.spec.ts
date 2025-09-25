import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/apointments";

//criar uma categorização
describe('CreateAppointment', () => {
    //é igual a escrever o test
    it('should be able to create an appointment', () => {
        const createAppointment = new CreateAppointment()

        const startsAt = new Date();
        const endsAt = new Date();

        endsAt.setDate(endsAt.getDate() + 1)

       expect(createAppointment.execute({
        customer: 'Jhon Doe',
        startsAt,
        endsAt,
       })) .resolves.toBeInstanceOf(Appointment)
    })
})