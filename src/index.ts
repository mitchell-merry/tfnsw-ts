import 'dotenv/config';
import * as assert from 'assert';
import { writeFileSync } from 'fs';
import * as path from 'path';

const TRANSPORT_BASE_URL = process.env.TRANSPORT_BASE_URL ?? 'https://api.transport.nsw.gov.au';
assert.ok(process.env.TRANSPORT_API_KEY, 'Must specify a TRANSPORT_API_KEY environment variable.');
const TRANSPORT_API_KEY = process.env.TRANSPORT_API_KEY;

/**
 * A generic fetch function for the TransportFNSW API.
 * 
 * @param endpoint The endpoint to hit.
 * @param options Any other options to pass to the request.
 */
async function fetchTransport<T>(endpoint: `/${string}`, options: RequestInit = {}): Promise<T> {
    return fetch(`${TRANSPORT_BASE_URL}${endpoint}`, {
        method: 'get',
        ...options,
        headers: {
            'Authorization': `apikey ${TRANSPORT_API_KEY}`,
            ...options.headers,
        },
    })
    .then(async (res) => {
        switch (res.headers.get('content-type')) {
        case("application/zip"):
            const buff = Buffer.from(await res.arrayBuffer());
            return buff;
        case("application/json"):
            const json = await res.json();
            if (Object.keys(json).length === 1 && 'Message' in json && typeof json.Message === 'string') {
                throw new Error(json.Message);
            }

            return json;
        }
        return res;
    });
}

/**
 * https://opendata.transport.nsw.gov.au/node/8967/exploreapi#!/routes/get_file_list
 * 
 * @param route The route to get, e.g. T1
 */
async function getRoute(route: string) {
    return fetchTransport<GetRoutes>(`/v1/routes?route=${route}`);
}

/**
 * https://opendata.transport.nsw.gov.au/dataset/public-transport-timetables-realtime

 */
async function getTimetable(mode: "buses", contract_id?: string);
async function getTimetable(mode: "ferries", contract_id: "sydneyferries");
async function getTimetable(mode: "lightrail", contract_id: "innerwest" | "newcastle" | "cbdandsoutheast");
async function getTimetable(mode: "nswtrains", contract_id?: undefined);
async function getTimetable(mode: "sydneytrains", contract_id?: undefined);
async function getTimetable(mode: "metro", contract_id?: undefined);
async function getTimetable(mode: "regionbuses", contract_id: string);
async function getTimetable(mode: string, contract_id?: string) {
    return fetchTransport<Buffer>(`/v1/gtfs/schedule/${mode}${contract_id ? `/${contract_id}` : ""}`).then(
        buffer => {
            writeFileSync(path.join(process.cwd(), 'out', 'data.zip'), buffer);
        }
    );
}


// console.log(JSON.stringify(await getRoute("869"), null, 2));
console.log(JSON.stringify(await getTimetable("sydneytrains"), null, 2));
