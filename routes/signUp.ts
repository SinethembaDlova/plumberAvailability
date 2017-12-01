import * as bodyParser from 'body-parser';
import { Router, Request, Response, NextFunction } from 'express';
import plumberDB from '.././models/plumberDB'
import * as session from 'express-session';

export class UserAccount {

  constructor() { }

  //get route
  public signup(req: Request, res: Response): void {

    var name = req.body.name;
    var passkey = req.body.passkey;
    var phoneNumber = req.body.phoneNumber;

    var userAccount = new plumberDB({
      plumberName: name,
      password: passkey,
      contactNumber: phoneNumber
    })

    userAccount.save()
      .then((user) => {
        res.json({
          status: 200,
          response: 'User successfully created.',
          data: user
        })
      })
      .catch(error => (console.log(error)));
  }//end get homeRoute method
}
