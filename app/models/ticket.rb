class Ticket < ApplicationRecord
  belongs_to :user
  belongs_to :concert

  validates :name, presence: true

  def find_user
    User.find(params[:id])
  end
  
  def find_concert
    Concert.find(params[:id])
  end

  def needs_update?
    # find if user has bought tickets to this concert 
    # update number of tickets
    # else create new row
  end

end
