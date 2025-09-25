import { expect, test } from "vitest";
import { Appointment } from "./apointments";
import { getFutureDate } from "../testes/utils/get-future-date";

test('create an Appointment', () => {
    const startsAt = getFutureDate('2022-08-10')
    const endsAt = getFutureDate('2022-08-11')
    
    const appointment = new Appointment({
        customer: `Jhon Doe`,
        startsAt,
        endsAt,
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual('Jhon Doe')
});

test('cannot create an appointment with end date before start date', () => {
    const startsAt = getFutureDate('2022-08-10')
    const endsAt = getFutureDate('2022-08-09')

    expect(() => {
        return new Appointment({
            customer: `Jhon Doe`,
            startsAt,
            endsAt,

        })
    })
})
test('cannot create an appointment with end date before now', () => {
    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() - 1)
    endsAt.setDate(endsAt.getDate() - 3) // termina um dia atrás

    expect(() => {
        return new Appointment({
            customer: `Jhon Doe`,
            startsAt,
            endsAt,
        })
    })
})

function getFtureDate() {
    throw new Error("Function not implemented.");
}
