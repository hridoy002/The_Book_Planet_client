import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h3>Blogs</h3>
            <Accordion defaultActiveKey="0" className='text-success fw-bold'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >Difference between Javascript and nodejs.</Accordion.Header>
                    <Accordion.Body className='text-success fw-bold'>
                        1. Javascript is a programming language | Nodejs is a javascript runtime environment.
                        <br />
                        2. JS is using for forntend development | Nodejs is using for backend server side development.
                        <br />
                        3.In Js you can use HTML tag | But you can't use HTML tag in Nodejs
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>When should you use nodejs and when should you use Mongodb?</Accordion.Header>
                    <Accordion.Body>
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Difference between SQL and NONSQL?</Accordion.Header>
                    <Accordion.Body>
                        1. SQL is a relational database | NoSQL is a non-relational databse.
                        <br />
                        2. Basically SQL is table based database | No-SQL is non-table based database.
                        <br />
                        3. SQL are scalable vertically | No-SQL are scalable horizontally.
                        <br />
                        4. Some example of SQL are Sqlite, MySql, Oracle, Postgres and MS-SQL | No-SQL are  MongoDB, BigTable, Hbase, RavenDb,CouchDb , Redis and  Neo4j.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is the purpose of JWT and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        JWT or JSON Web Token is an open standard .It is using to share security info between client and server.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;