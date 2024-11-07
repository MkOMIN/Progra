import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterComponent } from './footer.component';

/**const $list = document.querySelectorAll('li');

function activeLink() {
  $list.forEach(($li) => {
    $li.classList.remove('active')
  });
  this.classList.add('active');
}

$list.forEach(($li)) => {
  $li.addEventListener(
    'click',
    activeLink,
  );
});  */


describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

