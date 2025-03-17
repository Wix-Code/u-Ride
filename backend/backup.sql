--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Book; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Book" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    fname text NOT NULL,
    email text NOT NULL,
    "phoneNo" text NOT NULL,
    age integer NOT NULL,
    amount integer NOT NULL,
    "DropoffLocation" text NOT NULL,
    date timestamp(3) without time zone NOT NULL,
    "pickupLocation" text NOT NULL,
    "time" text NOT NULL,
    status text DEFAULT 'pending'::text NOT NULL
);


ALTER TABLE public."Book" OWNER TO postgres;

--
-- Name: Book_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Book_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Book_id_seq" OWNER TO postgres;

--
-- Name: Book_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Book_id_seq" OWNED BY public."Book".id;


--
-- Name: Car; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Car" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    model text NOT NULL,
    capacity integer NOT NULL,
    "addHor" integer NOT NULL,
    "fullDay" integer NOT NULL,
    "halfDay" integer NOT NULL,
    luggage integer NOT NULL,
    description text NOT NULL,
    image text NOT NULL,
    name text NOT NULL,
    type text
);


ALTER TABLE public."Car" OWNER TO postgres;

--
-- Name: Car_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Car_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Car_id_seq" OWNER TO postgres;

--
-- Name: Car_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Car_id_seq" OWNED BY public."Car".id;


--
-- Name: Rent; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Rent" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    fname text NOT NULL,
    email text NOT NULL,
    "phoneNo" text NOT NULL,
    city text NOT NULL,
    "startDate" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "endDate" timestamp(3) without time zone,
    age integer NOT NULL,
    "carId" integer,
    price integer,
    "rentalType" text,
    "time" text
);


ALTER TABLE public."Rent" OWNER TO postgres;

--
-- Name: Rent_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Rent_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Rent_id_seq" OWNER TO postgres;

--
-- Name: Rent_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Rent_id_seq" OWNED BY public."Rent".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    email text NOT NULL,
    name text,
    password text NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Book id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Book" ALTER COLUMN id SET DEFAULT nextval('public."Book_id_seq"'::regclass);


--
-- Name: Car id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Car" ALTER COLUMN id SET DEFAULT nextval('public."Car_id_seq"'::regclass);


--
-- Name: Rent id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rent" ALTER COLUMN id SET DEFAULT nextval('public."Rent_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Book; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Book" (id, "userId", fname, email, "phoneNo", age, amount, "DropoffLocation", date, "pickupLocation", "time", status) FROM stdin;
1	2	Ogbonna Ugochukwu	wisdom@gmail.com	08126829146	25	2733	Oshodi	2025-03-11 10:18:53.58	Ikeja	11:18:53 AM	pending
2	4	Wisdom	ogbonna428alex@gmail.com	08126829146	25	74977	lagos	2025-03-14 21:37:51.87	ilorin	10:37:51 PM	pending
3	4	Wisdom	ogbonna428alex@gmail.com	08126829146	25	74977	lagos	2025-03-14 21:38:26.9	ilorin	10:38:26 PM	pending
4	4	Wisdom	ogbonna428alex@gmail.com	08126829146	25	2516	Ilorin Airport	2025-03-14 21:40:31.544	Ilorin Stadium	10:40:31 PM	pending
5	4	Wisdom	ogbonna428alex@gmail.com	08126829146	25	2576404	Concord Hotel	2025-03-14 21:45:40.111	Imsu junction	10:45:40 PM	pending
6	4	Wisdom	ogbonna428alex@gmail.com	08126829146	25	1724268	Concord Hotel, Owerri	2025-03-14 21:48:23.681	Imsu junc, Owerri	10:48:23 PM	pending
7	4	Wisdom			25	1129	Assumpta Cathedral	2025-03-14 21:56:31.047	IMSU, Owerri	10:56:31 PM	pending
8	4	Wisdom	ogbonna428alex@gmail.com	08187844734	25	1129	Assumpta Cathedral	2025-03-14 21:58:48.007	IMSU, Owerri	10:58:48 PM	pending
\.


--
-- Data for Name: Car; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Car" (id, "userId", model, capacity, "addHor", "fullDay", "halfDay", luggage, description, image, name, type) FROM stdin;
3	2	2023	6	30000	600000	300000	4	Although we are familiar with the proper and suitable way of chauffeur transfers thanks to our significant experience in the executive ground transportation industry. We are also more than pleased to accommodate any special requests or requirements from our clients. We only use the best vehicles available to transport our executive clientele.	https://mlszn6rjkywy.i.optimole.com/w:281/h:180/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2023/10/nairaxi-landcruiser-series-hire-1.png	Hire Toyota Land Cruiser SUV	Executive Car
4	2	2021	4	30000	400000	200000	4	Range Rover Autobiography  is one of the most luxurious 4X4 SUV, is ideal for chauffeur-driven travel, tours, shopping trips, luxury airport transfers, chauffeur services for special events like bridal and groom parties, and more. The Range Rover can accommodate up to 4 passengers safely and comfortably along with a chauffeur. Our Range Rover with driver in Nigeria let you work, entertain, and relax in the utmost comfort and style.	https://mlszn6rjkywy.i.optimole.com/w:281/h:180/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2023/10/nairaxi-landcruiser-series-hire-1.png	Hire Range Rover Autobiography	Business class
5	2	2019	30	30000	650000	300000	10	Range Rover Autobiography  is one of the most luxurious 4X4 SUV, is ideal for chauffeur-driven travel, tours, shopping trips, luxury airport transfers, chauffeur services for special events like bridal and groom parties, and more. The Range Rover can accommodate up to 4 passengers safely and comfortably along with a chauffeur. Our Range Rover with driver in Nigeria let you work, entertain, and relax in the utmost comfort and style.	https://mlszn6rjkywy.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2023/10/nairaxi-toyota-coaster-hire.png	Toyota Coaster Bus Hire	Group shuttle
6	2	2019	4	30000	850000	400000	4	We are confident that you will enjoy our Toyota Land Cruiser chauffeur services in Lagos, Abuja, Kano, Port Harcourt, Enugu, Nigeria. Every effort will be taken to make your transportation with our Toyota Land Cruiser with driver in  Nigeria as pleasurable and comfortable as possible. Although we are familiar with the proper and suitable way of chauffeur transfers thanks to our significant experience in the executive ground transportation industry. We are also more than pleased to accommodate any special requests or requirements from our clients. We only use the best vehicles available to transport our executive clientele.	https://mlszn6rjkywy.i.optimole.com/w:281/h:180/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2023/10/nairaxi-landcruiser-series-hire-1.png	Toyota Land Cruiser SUV	Business Class
2	2	2023	6	30000	600000	300000	4	Although we are familiar with the proper and suitable way of chauffeur transfers thanks to our significant experience in the executive ground transportation industry. We are also more than pleased to accommodate any special requests or requirements from our clients. We only use the best vehicles available to transport our executive clientele.	https://mlszn6rjkywy.i.optimole.com/w:281/h:180/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2023/10/nairaxi-landcruiser-series-hire-1.png	Hire Toyota Land Cruiser SUV	Business class
7	2	2019	4	30000	400000	200000	4	Range Rover Velar  is one of the most luxurious 4X4 SUV, is ideal for chauffeur-driven travel, tours, shopping trips, luxury airport transfers, chauffeur services for special events like bridal and groom parties, and more. The Range Rover Velar can accommodate up to 4 passengers safely and comfortably along with a chauffeur. Our Range Rover with driver in Nigeria let you work, entertain, and relax in the utmost comfort and style. Our Range Rover chauffeur services in Lagos, Abuja, Kano, Port Harcourt, Enugu, Nigeria offer the peak of luxury. You can experience a new level of style and luxury by hiring our Range Rover with driver in Nigeria. The magnificent interior of the Range Rover was created with relaxation and comfort in mind. Our professional drivers can pick up from and drop off at any address at any time requested. You may relax and enjoy the ride in our premium Range Rover Velar.	https://mlszn6rjkywy.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2023/10/nairaxi-range-rover-velar-series-hire-1.png	Range Rover Velar Hire	Business Class
\.


--
-- Data for Name: Rent; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Rent" (id, "userId", fname, email, "phoneNo", city, "startDate", "endDate", age, "carId", price, "rentalType", "time") FROM stdin;
1	2	Ogbonna Ugochukwu	ogbonnaugochukwu488@gmail.com	08126829146	Abuja	2025-03-23 00:00:00	2025-03-25 00:00:00	25	\N	\N	\N	\N
2	2	Ogbonna Ugochukwu	wisdom@gmail.com	08126829146	Abuja	2025-03-23 00:00:00	2025-03-25 00:00:00	25	2	\N	\N	\N
3	2	Ogbonna Ugochukwu	wisdom@gmail.com	08126829146	Abuja	2025-03-23 00:00:00	2025-03-25 00:00:00	25	2	\N	\N	\N
4	2	Ogbonna Ugochukwu	wisdom@gmail.com	08126829146	Abuja	\N	\N	25	2	\N	\N	\N
5	2	Ogbonna Ugochukwu	wisdom@gmail.com	08126829146	Abuja	\N	\N	25	2	\N	600000	\N
6	2	Ogbonna Ugochukwu	wisdom@gmail.com	08126829146	Abuja	\N	\N	25	\N	\N	600000	\N
8	2	Ogbonna Ugochukwu	wisdom@gmail.com	08126829146	Abuja	\N	\N	25	\N	\N	600000	\N
10	2	Ogbonna Ugochukwu	wisdom@gmail.com	08126829146	Abuja	\N	\N	25	\N	\N	600000	\N
12	2	Ogbonna Ugochukwu	wisdom@gmail.com	08126829146	Abuja	\N	\N	25	2	300000	halfDay	\N
13	2	Ogbonna Ugochukwu	wisdom@gmail.com	08126829146	Abuja	\N	\N	25	2	600000	fullDay	\N
14	2	Ogbonna Ugochukwu	wisdom@gmail.com	08126829146	Abuja	2025-03-23 00:00:00	2025-03-25 00:00:00	25	2	1200000	multiDay	\N
15	2	Ogbonna Ugochukwu	wisdom@gmail.com	08126829146	Abuja	2025-03-23 00:00:00	2025-03-26 00:00:00	25	2	1800000	multiDay	\N
16	2	Ogbonna Ugochukwu	wisdom@gmail.com	08126829146	Abuja	2025-03-23 00:00:00	2025-03-26 00:00:00	25	2	2400000	multiDay	\N
17	4	Wisdom	ogbonna428alex@gmail.com	08126829146	Ilorin	2025-03-15 00:00:00	\N	25	4	200000	halfDay	9AM
18	4	Wisdom	ogbonna428alex@gmail.com	08126829146	Ilorin	2025-03-17 00:00:00	\N	25	4	200000	halfDay	9AM
19	4	Wisdom	ogbonna428alex@gmail.com	08126829146	Ilorin	2025-03-17 00:00:00	\N	25	4	200000	halfDay	9AM
20	4	Wisdom	ogbonna428alex@gmail.com	08126829146	Ilorin	2025-03-17 00:00:00	2025-03-19 00:00:00	25	4	1200000	multiDay	10AM
21	4	Wisdom	ogbonna428alex@gmail.com	08126829146	Ilorin	2025-03-15 00:00:00	2025-03-17 00:00:00	23	4	1200000	multiDay	10AM
22	4	Wisdom	ogbonna428alex@gmail.com	08126829146	Ilorin	2025-03-15 00:00:00	\N	25	4	200000	halfDay	10AM
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, email, name, password) FROM stdin;
2	ogbonnaugochukwu488@gmail.com	Wisdom	$2b$10$.h0p6QAMjjdXF2wioe.xfuaVcFXAjxjijavtVzVKvYSlwtWpa/rra
4	ogbonna428alex@gmail.com	Ugo	$2b$10$SMiv54kdjfXceaLqR9J/R.i2h2NF2xEsjdyWLcormJ3jXunTXKkyG
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
b624f6b6-0300-4fa3-92f8-a5082146bf63	29e6f1a095e1b9adc5e1bf3a4b4dd0025fcde826832d0f8ecce1e9ad60961096	2025-03-05 18:53:59.440095-08	20250306025359_	\N	\N	2025-03-05 18:53:59.413257-08	1
a10766ea-8490-40c7-853d-9b0059035dc1	86538f211410d09eae114c5c4b9b02a63da643da5bba9d74c6efd6189599ab39	2025-03-06 17:43:10.728168-08	20250307014310_	\N	\N	2025-03-06 17:43:10.689611-08	1
bd890e91-e26d-4b70-bf97-6028c3ad31a8	dd5186e2b3b27abea483ee1c9897ff6239c809d77c5efc92c358e03ef4148aba	2025-03-13 23:18:23.159019-07	20250314061823_	\N	\N	2025-03-13 23:18:23.147547-07	1
78ba82f7-8b71-4b95-b2f1-f179db13d1b1	a3b10f206dbc8e8f7499f36b4a0c9d7faccff256a58eb872c60e1bd6e86d2d17	2025-03-07 05:55:28.594816-08	20250307135528_	\N	\N	2025-03-07 05:55:28.575545-08	1
dae042bb-b2e9-4c9d-8328-905918acea73	e41257f780bea2c32ebc3f675057797933d2f0bd73637086a6a56c4ee5b9c7d8	2025-03-07 16:21:56.656932-08	20250308002156_	\N	\N	2025-03-07 16:21:56.629399-08	1
cba23403-5b30-4f8e-8f5b-6befc4ed4352	55502ab6ef7a42350b086c10e5e7e92e1ed71de9ffef891f3b1bec27f5e8abc8	2025-03-07 16:32:45.628224-08	20250308003245_	\N	\N	2025-03-07 16:32:45.619793-08	1
40371150-e65b-4f1a-8118-b7c1278518e8	a7b243b28ab644ba1dd28b65cd07bf0cb591d1e5d2643d9c8b58e2e95dec650c	2025-03-08 10:06:43.418916-08	20250308180643_	\N	\N	2025-03-08 10:06:43.375407-08	1
2a496fc2-e1b3-4110-9f65-a1146b81197f	6d9f4762ca5da34619ecfdac186e543f632300cb09677cbc15b3758213aa6d81	2025-03-08 10:22:23.634892-08	20250308182223_	\N	\N	2025-03-08 10:22:23.624207-08	1
f8ed8d90-64cb-406e-9f9f-4104ded8abeb	5e2049ad4e7a8dfbb205ac872e4db9ff21dbe066eb6dce52e2d0e2e7d1f95c28	2025-03-09 00:05:39.657053-08	20250309080539_	\N	\N	2025-03-09 00:05:39.647684-08	1
a42bd923-c23e-4c6e-aa60-98cf21bdf474	d1ddf6aa908aa5e90c584e6f8492b9f82636d335767600bb35e405b4a5811250	2025-03-09 00:21:57.988305-08	20250309082157_	\N	\N	2025-03-09 00:21:57.960665-08	1
cc10d7db-faf2-4c79-b6d1-8e12a2d812e5	24aa38587cd5c4751597621de196e373ed167d8cb8c7436b3adcb30c144c2d36	2025-03-09 05:48:04.895909-07	20250309124804_	\N	\N	2025-03-09 05:48:04.873585-07	1
ec992caf-8206-4492-9267-32ecc1453e37	2bcb687c370f23ff8ce74d57b42bf6b927c9b50da513c1507e4b381516554414	2025-03-10 02:54:08.304865-07	20250310095408_	\N	\N	2025-03-10 02:54:08.253953-07	1
8225f9db-81b9-4ae3-a38c-4a7395b00849	cf4ec04ae13131dc212c18505a7c0fd837e13ab001451d0b8e10c6f6922f8110	2025-03-10 03:12:22.954577-07	20250310101222_	\N	\N	2025-03-10 03:12:22.940702-07	1
2ed1a209-ab34-4e6a-9946-755c1c790eac	37b54951415b922669a0a0f0f7eaa941b7040034f3a393c88915efb10ba4e79d	2025-03-10 03:17:21.335456-07	20250310101721_	\N	\N	2025-03-10 03:17:21.305627-07	1
7d859719-b931-4b52-bff0-b267b173f793	a0c92640649a0182fdffbf2b606a00afab634875f87fa6dd52cc7074858387a3	2025-03-11 02:50:24.405117-07	20250311095024_	\N	\N	2025-03-11 02:50:24.390026-07	1
1b0fe764-b1ba-421c-8ba4-fddf5ef7383c	4bab338bec15e24e8f995efc84ee629764c28449e0782fd521ae01f35049cddf	2025-03-13 12:12:13.379889-07	20250313191213_	\N	\N	2025-03-13 12:12:13.3403-07	1
\.


--
-- Name: Book_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Book_id_seq"', 8, true);


--
-- Name: Car_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Car_id_seq"', 7, true);


--
-- Name: Rent_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Rent_id_seq"', 22, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 4, true);


--
-- Name: Book Book_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Book"
    ADD CONSTRAINT "Book_pkey" PRIMARY KEY (id);


--
-- Name: Car Car_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Car"
    ADD CONSTRAINT "Car_pkey" PRIMARY KEY (id);


--
-- Name: Rent Rent_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rent"
    ADD CONSTRAINT "Rent_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: Rent Rent_carId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Rent"
    ADD CONSTRAINT "Rent_carId_fkey" FOREIGN KEY ("carId") REFERENCES public."Car"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

