import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  NavController,
  ModalController,
  ActionSheetController,
} from "@ionic/angular";
import { PlacesService } from "../../places.service";
import { Place } from "../../place.model";
import { CreateBookingComponent } from "src/app/bookings/create-booking/create-booking.component";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private PlacesService: PlacesService,
    private modalCrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack("/places/tabs/search");
        return;
      }
      this.place = this.PlacesService.getPlace(paramMap.get("placeId"));
    });
  }

  onBookPlace() {
    this.actionSheetCtrl
      .create({
        header: "choose an action",
        buttons: [
          {
            text: "Select date",
            handler: () => {
              this.openModal();
              console.log("heeere");
            },
          },

          { text: "cancel", role: "cancel" },
        ],
      })
      .then((actionEl) => actionEl.present());
  }

  openModal() {
    this.modalCrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((result) => {
        console.log(result.data, result.role);
        if (result.data === "confirm") {
          console.log("BOOKED");
        }
      });
  }
}
