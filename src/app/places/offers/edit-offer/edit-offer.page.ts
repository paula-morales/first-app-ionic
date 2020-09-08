import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PlacesService } from "../../places.service";
import { NavController } from "@ionic/angular";
import { Place } from "../../place.model";

@Component({
  selector: "app-edit-offer",
  templateUrl: "./edit-offer.page.html",
  styleUrls: ["./edit-offer.page.scss"],
})
export class EditOfferPage implements OnInit {
  place: Place;
  constructor(
    private route: ActivatedRoute,
    private PlacesService: PlacesService,
    private navCrtl: NavController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("placeId")) {
        this.navCrtl.navigateBack("/places/tabs/offers");
        return;
      }
      this.place = this.PlacesService.getPlace(paramMap.get("placeId"));
    });
  }
}
