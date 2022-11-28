class TicketsController < ApplicationController

  def index 
    tickets = Ticket.where("user_id = '#{@current_user.id}'")
    render json: tickets
  end

  def create
    # if needs_update?
    # update number of tickets in quantity column by adding
    # else
    ticket = Ticket.create!(ticket_params)
    render json: ticket, status: :created
  end

  # def update
  #   ticket_to_update = find_ticket
  #   ticket_to_update.update!(ticket_params)
  #   render json: ticket, status: :accepted
  # end

  def destroy
    ticket_to_delete = find_ticket
    ticket_to_delete.destroy
    head :no_content
  end

  private

  def ticket_params
    params.permit(:name, :user_id, :concert_id, :quantity)
  end

  def find_ticket
    Ticket.find(params[:id])
  end

end
