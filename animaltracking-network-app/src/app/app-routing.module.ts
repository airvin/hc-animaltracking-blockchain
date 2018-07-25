/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { FieldComponent } from './Field/Field.component';
import { AnimalComponent } from './Animal/Animal.component';
import { BusinessComponent } from './Business/Business.component';

import { FarmerComponent } from './Farmer/Farmer.component';
import { RegulatorComponent } from './Regulator/Regulator.component';

import { AnimalMovementDepartureComponent } from './AnimalMovementDeparture/AnimalMovementDeparture.component';
import { AnimalMovementArrivalComponent } from './AnimalMovementArrival/AnimalMovementArrival.component';
import { SetupDemoComponent } from './SetupDemo/SetupDemo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Field', component: FieldComponent },
  { path: 'Animal', component: AnimalComponent },
  { path: 'Business', component: BusinessComponent },
  { path: 'Farmer', component: FarmerComponent },
  { path: 'Regulator', component: RegulatorComponent },
  { path: 'AnimalMovementDeparture', component: AnimalMovementDepartureComponent },
  { path: 'AnimalMovementArrival', component: AnimalMovementArrivalComponent },
  { path: 'SetupDemo', component: SetupDemoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
