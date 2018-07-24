import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};


  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(name, email, phone, image){
    this.contacts.push({
      name: name.value,
      email: email.value,
      phoneNumber: phone.value,
      image: image.value
    })
    name.value = " "
    email.value = " "
    phone.value = " "
    image.value = " "
    // add contact to contacts list
    // clear inputs
  }
}
