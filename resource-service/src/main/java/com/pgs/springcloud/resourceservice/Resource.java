package com.pgs.springcloud.resourceservice;

public class Resource {

    private String name;

    private int price;

    public Resource() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }


    public Resource(String name, int price) {
        this.name = name;
        this.price = price;
    }
}
