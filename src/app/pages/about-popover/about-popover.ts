/**
 * PopoverPage class represents a component that displays a popover with various options.
 * It is used in an Ionic Angular application.
 *
 * Properties:
 * - urlHome: string - The URL for the home page.
 * - urlContact: string - The URL for the contact page.
 * - urlGithub: string - The URL for the GitHub repository.
 *
 * Methods:
 * - openContactForm(): Promise<void> - Navigates to the contact page and dismisses the popover.
 * - openUrl(url: string): void - Opens the given URL in a new browser tab and dismisses the popover.
 */
import { Component, inject } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { Router } from "@angular/router";
import { IonicModule } from "@ionic/angular";

@Component({
  templateUrl: "./about-popover.html",
  styleUrls: ["./about-popover.scss"],
  standalone: true,
  imports: [IonicModule],
})
export class PopoverPage {
  private router = inject(Router);
  private popoverCtrl = inject(PopoverController);

  public urlHome = "https://linktr.ee/afid_yoga";
  public urlContact =
    "https://www.linkedin.com/in/mohamad-afid-yoga-pratama-putra-a446271a6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bf4uQN5PSQ7qsZzvMonYZjQ%3D%3D";
  public urlGithub = "https://github.com/afidyoga/Three-Little-Witches-App";

  async openContactForm() {
    await this.router.navigate(["app/tabs/contact"]);
    await this.popoverCtrl.dismiss();
  }

  openUrl(url: string) {
    window.open(url, "_blank");
    this.popoverCtrl.dismiss();
  }
}
