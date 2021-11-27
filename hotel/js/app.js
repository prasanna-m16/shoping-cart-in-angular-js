var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "Dosa", p_image: "images/1.jpg", p_price: 300},
					{p_id: "2", p_name: "Idly", p_image: "images/2.jpg", p_price:50},
					{p_id: "3", p_name: "Pizza", p_image: "images/3.jpg", p_price: 250},
					{p_id: "4", p_name: "Burger", p_image: "images/4.jpg", p_price: 300},
					{p_id: "5", p_name: "Apple", p_image: "images/5.jpg", p_price: 420},
					{p_id: "6", p_name: "Orange", p_image: "images/6.jpg", p_price: 60}
				];
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	});