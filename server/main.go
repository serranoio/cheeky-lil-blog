package main

import "fmt"
import (
    "log"
    // "encoding/json"
    "net/http"
    "github.com/pocketbase/pocketbase"
    "github.com/labstack/echo/v5"
    // "github.com/pocketbase/pocketbase/apis"
    "github.com/pocketbase/pocketbase/core"
    // "github.com/pocketbase/pocketbase/models"

)


func hello(c echo.Context) error {
    return c.String(http.StatusOK, "Hello, Cunt!")
}
func hello1(c echo.Context) error {
    return c.String(http.StatusOK, "Hello, World from other route!")
}

func main() {
	app := pocketbase.New()
    app.OnBeforeServe().Add(func(e *core.ServeEvent) error {

        // marshalled, err := json.Marshal([]byte(data))
        // if err != nil {
        //     fmt.Panic()
        // }

        // e.Router.POST("/hello", hello)
        e.Router.GET("/hello", hello)
        e.Router.GET("/api/blog", hello)

        return nil
    })



	if err := app.Start(); err != nil {
		log.Fatal(err)
	}



	fmt.Println("Hello, World!")
}
