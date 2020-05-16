class UsersController < ApplicationController
	before_action :authorize_access_request!, except: [:show, :index]
	
	
	def index
		@users = User.all
		render json: @users
	end

	# GET /users/1
	def show
		render json: @user
	end

	def update
		if @user.update(user_params)
			render json: @user
		else
			render json: @user.errors, status: :unprocessable_entity
		end
	end
	
	def destroy
		@user.destroy
	end
	
	private
		# Use callbacks to share common setup or constraints between actions.
	def set_user
		@user = User.find(params[:id])
	end
	
	# Only allow a trusted parameter "white list" through.
	def user_params
		params.permit(:email, :fname, :lname, :phone, :role, :password, :password_confirmation)
	end
end
