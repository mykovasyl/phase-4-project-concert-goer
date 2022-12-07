class ConcertsController < ApplicationController
  skip_before_action :authorize, only: :search

  def index 
    concerts = Concert.all 
    render json: concerts
  end

  def create
    concert = Concert.create!(concert_params)
    render json: concert, status: :created
  end

  # def search
  #   concerts = Concert.all
  #   searched_concerts = concerts.select{|concert| concert.name.include?(params[:search])}
  #   render json: searched_concerts, status: :ok
  #   concerts_to_display = Concert.where(name: )
  # end

  # def update
  #   concert_to_update = find_concert
  #   concert_to_update.update!(concert_params)
  #   render json: concert, status: :accepted
  # end

  # def destroy
  #   concert_to_delete = find_concert
  #   concert_to_delete.destroy
  #   head :no_content
  # end

private

def concert_params
  params.permit(:name, :performer, :date, :time, :city, :state)
end

# def find_concert
#   Concert.find(params[:id])
# end


end
