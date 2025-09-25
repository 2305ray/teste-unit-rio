import { expect, test } from "vitest";
import { Appointment } from "./apointments";

test('create an Appointment', () => {
    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() + 1) // termina um dia atrás

    const appointment = new Appointment({
        customer: `Jhon Doe`,
        startsAt,
        endsAt,
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual('Jhon Doe')
});

test('cannot create an appointment with end date before start date', () => {
    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() - 1) // termina um dia atrás

    expect(() => {
        return new Appointment({
            customer: `Jhon Doe`,
            startsAt,
            endsAt,
        })
    })
})