type Colour = `#${string}`;

// GTFS stands for General Transit Feed Specification https://gtfs.org/
type Route = {
    /** @example "sydneytrains" */
    "gtfs_alerts_name": string;
    /** @example "Sydney Trains Network" */
    "transport_name": string;
    /** @example "x0001" */
    "operator_id": string;
    "contract_id": string;
    /** @example "North Shore & Western Line" */
    "efa_route_name": string;
    /** @example "SydneyTrains" */
    "gtfs_agency_id": string;
    "regional_trains": string;
    /** "#FFFFFF" */
    "background_colour": Colour;
    "depot_name": string;
    /** @example "NSN_1a" */
    "gtfs_route_id_out": string;
    /** @example "0" */
    "frequency_route": string;
    "lp_weekday_hours": string;
    /** @example "2" */
    "route_type": string;
    /** @example "1" */
    "mot_for_interchange_id": string;
    "start_date": string;
    /** @example "T1" */
    "my_timetable_route_name": string;
    /** @example "City to Berowra via Gordon" */
    "service_direction_name": string;
    "second_twitter_handle": string;
    /** @example "NSN_1a" */
    "gtfs_route_id_in": string;
    "route_variant_type": string;
    /** @example "North Shore & Western Line" */
    "route_search_name": string;
    "lp_contact_number": string;
    /** @example "@T1SydneyTrains" */
    "first_twitter_handle": `@${string}` | "";
    /** @example "Sydney Trains" */
    "operator_name": string;
    /** @example "3001" */
    "tariff_type": string;
    /** @example "#F99D1C" */
    "foreground_colour": Colour;
    "lp_email": string;
    /** @example "#FFFFFF" */
    "text_colour": Colour;
    /** @example "Commuter railway" */
    "mot_for_interchange": string;
    "region": string;
    /** @example "1" */
    "transport_name_id": `${number}`;
    /** @example "7" */
    "gtfs_alerts_id": `${number}`;
};

type GetRoutes = {
    ROUTES: Route[];
};