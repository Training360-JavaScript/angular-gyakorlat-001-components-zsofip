import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

interface IIndexable {
  [key: string]: any;
}

import angularJson from '../../angular.json';
const appName: string = Object.keys(angularJson.projects)[0];
const styles: any = (angularJson.projects as IIndexable)[appName].architect.build.options.styles;

import packageJson from '../../package.json';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('bootstrap should be installed with npm', () => {
    expect(
      Object.keys(packageJson.dependencies).includes('bootstrap')
    ).toBeTruthy();
  });

  it('bootstrap should be setted in angular.json', () => {
    expect(
      styles.includes('node_modules/bootstrap/dist/css/bootstrap.min.css')
    ).toBeTruthy();
  });

  it('font-awesome should be installed with npm', () => {
    expect(
      Object.keys(packageJson.dependencies).includes('font-awesome')
    ).toBeTruthy();
  });

  it('font-awesome should be setted in angular.json', () => {
    expect(
      styles.includes('node_modules/font-awesome/css/font-awesome.min.css')
    ).toBeTruthy();
  });

  it('there should be a .container', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.container')).toBeTruthy();
  });

  it('there should be a Jumbotron', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.jumbotron')).toBeTruthy();
  });

});
