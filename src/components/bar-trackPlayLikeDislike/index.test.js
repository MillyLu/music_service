/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
import { rest } from "msw";
import { setupServer } from "msw/node";
import { fireEvent, render, screen } from "@testing-library/react";
import { nanoid } from '@reduxjs/toolkit'
 import { setupApiStoreTwo } from "../../test-utils";
 import { favoritesApi} from '../../services/favorites';

// import { TrackPlayLikeDislike } from "./trackPlayLikeDislike";
import { TrackPlayLike } from "../bar-trackPlayLike/trackPlayLike";
import { TrackPlayDislike } from "../bar-trackPlayDislike/trackPlayDislike";
import * as Styled from './styles';

const token = nanoid();
// Описываем endpoint-ы, которые хотим замокировать
export const handlers = [
  
  rest.get('https://painassasin.online/catalog/track/favorite/all/', (req, res, ctx) => {
      return res(
        ctx.set('Authorization', `Bearer ${token}`),
        ctx.json([ {
          "id": 9,
          "name": "Open Sea epic",
          "author": "Frank Schroter",
          "release_date": "2019-06-12",
          "genre": "Классическая музыка",
          "duration_in_seconds": 165,
          "album": "Open Sea epic",
          "logo": null,
          "track_file": "https://painassasin.online/media/music_files/Frank_Schroter_-_Open_Sea_epic.mp3"}]),
      )
    })
];

// Готовим моковый сервер
const server = setupServer(...handlers);

// Мокируем api store



const storeRef = setupApiStoreTwo([favoritesApi]);

describe("tracks", () => {
  // Поднимаем тестовый сервер перед запуском тестов
  beforeAll(() => server.listen());

  // Чистим обработчики между тестами
  afterEach(() => server.resetHandlers());

  // Отрубаем сервер после выполнения тестов.
  // НЕ ЗАБЫВАЙТЕ ЭТО ДЕЛАТЬ, иначе сервер будет работать вхолостую
  afterAll(() => server.close());


  // избранное

 /* const token = nanoid();

  const favorServer = setupServer(
    // Describe the requests to mock.
    rest.get('https://painassasin.online/catalog/track/favorite/all/', (req, res, ctx) => {
      return res(
        ctx.set('authorization', `Bearer ${token}`),
        ctx.json([ {
          "id": 9,
          "name": "Open Sea epic",
          "author": "Frank Schroter",
          "release_date": "2019-06-12",
          "genre": "Классическая музыка",
          "duration_in_seconds": 165,
          "album": "Open Sea epic",
          "logo": null,
          "track_file": "https://painassasin.online/media/music_files/Frank_Schroter_-_Open_Sea_epic.mp3"}]),
      )
    }),
  )
  beforeAll(() => {
    // Establish requests interception layer before all tests.
    favorServer.listen()
  })
  afterAll(() => {
    // Clean up after all tests are done, preventing this
    // interception layer from affecting irrelevant tests.
    favorServer.close()
  }) */

  it("should show requested data and calls onClick", async () => {
     server.use(...handlers);
     const handleAddFavorites = jest.fn();
    render(<Styled.TrackPlayLikeDis>
        <TrackPlayLike handleAddFavorites={handleAddFavorites}/>
        <TrackPlayDislike  />
    </Styled.TrackPlayLikeDis>, { wrapper: storeRef.wrapper });

    // Проверяем начальное состояние компонента
   // screen.getByText("Loading...");
   


   const like = screen.getByTestId('like')
      fireEvent.click(like);
      expect(handleAddFavorites).toHaveBeenCalledTimes(1)

   
  });
});