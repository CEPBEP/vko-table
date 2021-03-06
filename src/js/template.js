import config from "./config.js";
import { createElement } from "./util.js";

const STATUS_DICT = {
  departures: `Вылет`,
  arrivals: `Прилёт`,
  true: `: задержанные`,
  false: ``
};

const getStatusElement = () => {
  const updatedStatus = `<p class="filter__status">${
    STATUS_DICT[config.DIRECTION]
  }${STATUS_DICT[config.SHOW_DELAYED]}</p>`;
  return createElement(updatedStatus);
};

const getFlightsElement = data => {
  let flightItems = ``;
  for (let i = 0; i < data.length; i++) {
    flightItems += `\
        <li class="flights__item">
        <div>
            <span class="flights__time">${data[i].time}</span>
            <center><span class="flights__city">${data[i].destination}</span></center>
        </div>
        <span class="flights__id">${data[i].id}</span>
        <span class="flights__status">${data[i].status}</span>
        </li>`;
  }
  const flightList = `\
    <ul class="flights">
        ${flightItems}
    </ul>
    `;
  return createElement(flightList);
};

export { getStatusElement, getFlightsElement };
